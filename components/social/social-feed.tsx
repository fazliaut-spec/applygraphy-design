"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Heart, MessageCircle, Share2, ImageIcon, Video, MoreHorizontal } from "lucide-react"

interface Post {
  id: string
  author: {
    name: string
    avatar: string
    university?: string
    verified: boolean
    rank: string
  }
  content: string
  image?: string
  timestamp: string
  likes: number
  comments: number
  shares: number
  isLiked: boolean
  type: "text" | "image" | "video" | "question"
}

const mockPosts: Post[] = [
  {
    id: "1",
    author: {
      name: "سارا احمدی",
      avatar: "/placeholder.svg?height=40&width=40",
      university: "دانشگاه تورنتو",
      verified: true,
      rank: "مشاور تأیید شده",
    },
    content:
      "سلام دوستان! امروز قبولی‌ام از دانشگاه تورنتو رو دریافت کردم 🎉 بعد از ۶ ماه انتظار، بالاخره خبر خوش اومد. اگه سوالی دارید در مورد فرآیند درخواست، خوشحال میشم کمکتون کنم!",
    image: "/placeholder.svg?height=300&width=500",
    timestamp: "۲ ساعت پیش",
    likes: 45,
    comments: 12,
    shares: 8,
    isLiked: false,
    type: "image",
  },
  {
    id: "2",
    author: {
      name: "علی رضایی",
      avatar: "/placeholder.svg?height=40&width=40",
      university: "دانشگاه آکسفورد",
      verified: false,
      rank: "دانشجوی دکترا",
    },
    content:
      "کسی تجربه‌ای از آزمون GRE داره؟ چطور می‌تونم برای بخش Quantitative آماده بشم؟ هر نکته‌ای که دارید ممنون میشم بگید 🙏",
    timestamp: "۴ ساعت پیش",
    likes: 23,
    comments: 18,
    shares: 3,
    isLiked: true,
    type: "question",
  },
  {
    id: "3",
    author: {
      name: "مریم کریمی",
      avatar: "/placeholder.svg?height=40&width=40",
      university: "دانشگاه میونیخ",
      verified: true,
      rank: "مشاور ارشد",
    },
    content:
      "نکات مهم برای نوشتن Statement of Purpose:\n\n1️⃣ شخصی و منحصر به فرد باشید\n2️⃣ اهداف آینده‌تان را واضح بیان کنید\n3️⃣ تجربیات مرتبط را ذکر کنید\n4️⃣ دلیل انتخاب دانشگاه را بگویید\n\nموفق باشید! 💪",
    timestamp: "۱ روز پیش",
    likes: 67,
    comments: 24,
    shares: 15,
    isLiked: false,
    type: "text",
  },
]

export function SocialFeed() {
  const [posts, setPosts] = useState(mockPosts)
  const [newPost, setNewPost] = useState("")

  const handleLike = (postId: string) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              isLiked: !post.isLiked,
              likes: post.isLiked ? post.likes - 1 : post.likes + 1,
            }
          : post,
      ),
    )
  }

  const handlePost = () => {
    if (newPost.trim()) {
      const post: Post = {
        id: Date.now().toString(),
        author: {
          name: "شما",
          avatar: "/placeholder.svg?height=40&width=40",
          verified: false,
          rank: "عضو جدید",
        },
        content: newPost,
        timestamp: "الان",
        likes: 0,
        comments: 0,
        shares: 0,
        isLiked: false,
        type: "text",
      }
      setPosts([post, ...posts])
      setNewPost("")
    }
  }

  return (
    <div className="space-y-6">
      {/* Create Post */}
      <Card className="bg-white shadow-lg border-0">
        <CardContent className="p-6">
          <div className="flex gap-4">
            <Avatar className="w-12 h-12">
              <AvatarImage src="/placeholder.svg?height=48&width=48" alt="شما" />
              <AvatarFallback className="bg-gradient-to-r from-blue-500 to-green-500 text-white">ش</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-4">
              <Textarea
                placeholder="چه چیز جدیدی می‌خواهید به اشتراک بگذارید؟"
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                className="min-h-[100px] text-right border-gray-200 focus:border-blue-500"
              />
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <ImageIcon className="w-4 h-4 ml-2" />
                    عکس
                  </Button>
                  <Button variant="outline" size="sm">
                    <Video className="w-4 h-4 ml-2" />
                    ویدیو
                  </Button>
                </div>
                <Button
                  onClick={handlePost}
                  disabled={!newPost.trim()}
                  className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600"
                >
                  انتشار
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Posts Feed */}
      {posts.map((post) => (
        <Card key={post.id} className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="pb-4">
            <div className="flex items-start justify-between">
              <div className="flex gap-3">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
                  <AvatarFallback className="bg-gradient-to-r from-blue-500 to-green-500 text-white">
                    {post.author.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-gray-800">{post.author.name}</h3>
                    {post.author.verified && (
                      <Badge variant="secondary" className="text-xs">
                        ✓ تأیید شده
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">{post.author.rank}</p>
                  {post.author.university && <p className="text-xs text-blue-600">{post.author.university}</p>}
                  <p className="text-xs text-gray-500">{post.timestamp}</p>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="pt-0">
            <div className="space-y-4">
              <p className="text-gray-800 leading-relaxed whitespace-pre-line">{post.content}</p>

              {post.image && (
                <div className="rounded-lg overflow-hidden">
                  <img src={post.image || "/placeholder.svg"} alt="Post image" className="w-full h-auto object-cover" />
                </div>
              )}

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex gap-6">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleLike(post.id)}
                    className={`flex items-center gap-2 ${post.isLiked ? "text-red-500" : "text-gray-600"}`}
                  >
                    <Heart className={`w-4 h-4 ${post.isLiked ? "fill-current" : ""}`} />
                    {post.likes}
                  </Button>
                  <Button variant="ghost" size="sm" className="flex items-center gap-2 text-gray-600">
                    <MessageCircle className="w-4 h-4" />
                    {post.comments}
                  </Button>
                  <Button variant="ghost" size="sm" className="flex items-center gap-2 text-gray-600">
                    <Share2 className="w-4 h-4" />
                    {post.shares}
                  </Button>
                </div>

                {post.type === "question" && (
                  <Badge variant="outline" className="text-blue-600 border-blue-600">
                    سوال
                  </Badge>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
