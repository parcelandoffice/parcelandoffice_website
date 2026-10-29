import { NextRequest, NextResponse } from "next/server";
import { getItServiceBySlug, getRawItServiceBySlug } from "@/lib/apis";

export const dynamic = "force-dynamic";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await context.params;

    if (!slug) {
      return NextResponse.json(
        { success: false, error: "Service slug is required" },
        { status: 400 }
      );
    }

    const searchParams = request.nextUrl.searchParams;
    const isRaw = searchParams.get("raw") === "true";

    if (isRaw) {
      const rawDoc = await getRawItServiceBySlug(slug);
      if (!rawDoc) {
        return NextResponse.json(
          { success: false, error: `IT Service with slug "${slug}" not found in Sanity` },
          { status: 404 }
        );
      }
      return NextResponse.json({
        success: true,
        service: rawDoc,
      });
    }

    const service = await getItServiceBySlug(slug);

    if (!service) {
      return NextResponse.json(
        { success: false, error: `IT Service with slug "${slug}" not found` },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      service,
    });
  } catch (error) {
    console.error("Error in IT services detail API:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch IT service details" },
      { status: 500 }
    );
  }
}
