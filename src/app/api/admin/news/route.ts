import { NextRequest, NextResponse } from "next/server";
import { requireAuth } from "@/lib/auth";
import { readNews, createArticle } from "@/lib/news-store";
import type { NewsArticle } from "@/types";

export async function GET() {
  const auth = await requireAuth();
  if (!auth.authenticated) return auth.response;

  const articles = await readNews();
  return NextResponse.json(articles);
}

export async function POST(request: NextRequest) {
  const auth = await requireAuth();
  if (!auth.authenticated) return auth.response;

  const article = (await request.json()) as NewsArticle;

  if (!article.slug || !article.title || !article.date || !article.category) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    await createArticle(article);
    return NextResponse.json({ success: true }, { status: 201 });
  } catch (e) {
    return NextResponse.json(
      { error: (e as Error).message },
      { status: 409 }
    );
  }
}
