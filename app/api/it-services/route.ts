import { NextRequest, NextResponse } from "next/server";
import {
  getItServiceBySlug,
  getItServices,
  getRawItServiceBySlug,
} from "@/lib/apis";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const slug = searchParams.get("slug");
    const isRaw = searchParams.get("raw") === "true";

    // 1. If slug query param is supplied, return service detail
    if (slug) {
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
    }

    // 2. Otherwise return list of IT services
    const services = await getItServices();

    return NextResponse.json({
      success: true,
      count: services.length,
      services,
    });
  } catch (error) {
    console.error("Error in IT services API:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch IT services" },
      { status: 500 }
    );
  }
}
