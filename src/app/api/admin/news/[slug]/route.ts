import { NextRequest, NextResponse } from "next/server";
import { requireAuth } from "@/lib/auth";
import { getArticleBySlug, updateArticle, deleteArticle } from "@/lib/news-store";
import type { NewsArticle } from "@/types";

interface Params {
  params: Promise<{ slug: string }>;
}

export async function GET(_request: NextRequest, { params }: Params) {
  const auth = await requireAuth();
  if (!auth.authenticated) return auth.response;

  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json(article);
}

export async function PUT(request: NextRequest, { params }: Params) {
  const auth = await requireAuth();
  if (!auth.authenticated) return auth.response;

  const { slug } = await params;
  const updated = (await request.json()) as NewsArticle;

  if (!updated.slug || !updated.title || !updated.date || !updated.category) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    await updateArticle(slug, updated);
    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json(
      { error: (e as Error).message },
      { status: 404 }
    );
  }
}

export async function DELETE(_request: NextRequest, { params }: Params) {
  const auth = await requireAuth();
  if (!auth.authenticated) return auth.response;

  const { slug } = await params;
  try {
    await deleteArticle(slug);
    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json(
      { error: (e as Error).message },
      { status: 404 }
    );
  }
}
