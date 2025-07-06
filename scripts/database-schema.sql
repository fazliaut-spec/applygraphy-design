-- Users and Authentication
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255),
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    phone VARCHAR(20),
    date_of_birth DATE,
    nationality VARCHAR(100),
    current_country VARCHAR(100),
    profile_picture_url TEXT,
    is_verified BOOLEAN DEFAULT FALSE,
    subscription_tier VARCHAR(20) DEFAULT 'free', -- free, premium, pro
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Student Profiles
CREATE TABLE student_profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    current_education_level VARCHAR(50), -- high_school, bachelor, master
    field_of_study VARCHAR(100),
    gpa DECIMAL(3,2),
    english_proficiency JSONB, -- {ielts: 7.5, toefl: 100, etc}
    standardized_tests JSONB, -- {gre: 320, gmat: 700, etc}
    work_experience_years INTEGER DEFAULT 0,
    budget_range VARCHAR(50), -- 0-10k, 10k-30k, 30k-50k, 50k+
    preferred_countries TEXT[], -- array of country codes
    preferred_degree_level VARCHAR(20), -- bachelor, master, phd
    career_goals TEXT,
    resume_url TEXT,
    is_public BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Universities
CREATE TABLE universities (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    country VARCHAR(100) NOT NULL,
    city VARCHAR(100),
    website_url TEXT,
    logo_url TEXT,
    ranking_world INTEGER,
    ranking_national INTEGER,
    acceptance_rate DECIMAL(5,2),
    student_population INTEGER,
    international_student_percentage DECIMAL(5,2),
    campus_type VARCHAR(50), -- urban, suburban, rural
    established_year INTEGER,
    description TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Programs
CREATE TABLE programs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    university_id UUID REFERENCES universities(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    degree_level VARCHAR(20) NOT NULL, -- bachelor, master, phd
    field_of_study VARCHAR(100),
    duration_months INTEGER,
    tuition_fee_usd INTEGER,
    currency VARCHAR(10),
    application_deadline DATE,
    start_date DATE,
    language_of_instruction VARCHAR(50) DEFAULT 'English',
    minimum_gpa DECIMAL(3,2),
    english_requirements JSONB, -- {ielts_min: 6.5, toefl_min: 90}
    other_requirements TEXT[],
    description TEXT,
    career_outcomes TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Applications
CREATE TABLE applications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    program_id UUID REFERENCES programs(id) ON DELETE CASCADE,
    status VARCHAR(50) DEFAULT 'draft', -- draft, submitted, under_review, accepted, rejected, waitlisted
    application_deadline DATE,
    submitted_at TIMESTAMP,
    decision_date DATE,
    notes TEXT,
    documents JSONB, -- {sop: 'url', transcript: 'url', etc}
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Scholarships
CREATE TABLE scholarships (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    provider VARCHAR(255),
    amount_usd INTEGER,
    currency VARCHAR(10),
    deadline DATE,
    eligible_countries TEXT[],
    eligible_fields TEXT[],
    degree_levels TEXT[], -- bachelor, master, phd
    requirements TEXT,
    application_url TEXT,
    description TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Documents
CREATE TABLE documents (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    type VARCHAR(50) NOT NULL, -- resume, sop, transcript, recommendation
    name VARCHAR(255),
    file_url TEXT NOT NULL,
    file_size INTEGER,
    mime_type VARCHAR(100),
    is_verified BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT NOW()
);

-- AI Matching Results
CREATE TABLE ai_matches (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    program_id UUID REFERENCES programs(id) ON DELETE CASCADE,
    match_score DECIMAL(5,2), -- 0-100
    reasoning TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Community Posts
CREATE TABLE community_posts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    category VARCHAR(50), -- question, experience, advice, etc
    tags TEXT[],
    upvotes INTEGER DEFAULT 0,
    is_answered BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_programs_university ON programs(university_id);
CREATE INDEX idx_programs_field ON programs(field_of_study);
CREATE INDEX idx_applications_user ON applications(user_id);
CREATE INDEX idx_applications_program ON applications(program_id);
CREATE INDEX idx_ai_matches_user ON ai_matches(user_id);
CREATE INDEX idx_ai_matches_score ON ai_matches(match_score DESC);
