import { ImageResponse } from "next/og";
import { NextResponse } from "next/server";
import React from "react";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const hasTitle = searchParams.has("title");

    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : "Latest Blog";

    const isThai = /[\u0E00-\u0E7F]/.test(title ?? "");
    const fontName = isThai ? "IBM+Plex+Sans+Thai+Looped" : "Geist+Mono";

    async function loadGoogleFont(font: string, text: string | undefined) {
      const url = `https://fonts.googleapis.com/css2?family=${font}&text=${encodeURIComponent(text ?? "")}`;

      const css = await fetch(url).then(res => res.text());
      const resource = css.match(
        /src: url\((.+)\) format\('(opentype|truetype)'\)/,
      );

      if (resource) {
        const response = await fetch(resource[1]);
        if (response.status === 200) {
          return await response.arrayBuffer();
        }
      }

      throw new Error("failed to load font data");
    }

    return new ImageResponse(
      React.createElement(
        "div",
        {
          style: {
            display: "flex",
            height: "100%",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            letterSpacing: "-.02em",
            fontWeight: 700,
            background: "white",
            flexDirection: "column",
          },
        },
        [
          React.createElement(
            "div",
            {
              style: {
                left: 42,
                top: 42,
                position: "absolute",
                display: "flex",
                alignItems: "center",
              },
            },
            [
              React.createElement("span", {
                style: {
                  width: 24,
                  height: 24,
                  background: "black",
                },
              }),
              React.createElement(
                "span",
                {
                  style: {
                    marginLeft: 8,
                    fontSize: 20,
                  },
                },
                "theppitak.me",
              ),
            ],
          ),
          React.createElement(
            "div",
            {
              style: {
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                padding: "20px 50px",
                margin: "0 42px",
                fontSize: 40,
                width: "auto",
                maxWidth: 700,
                textAlign: "center",
                backgroundColor: "black",
                color: "white",
                lineHeight: 1.4,
              },
            },
            title,
          ),
        ],
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: isThai ? "IBM Plex Sans Thai Looped" : "Geist Mono",
            data: await loadGoogleFont(fontName, title),
            style: "normal",
          },
        ],
      },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to generate the image", details: error },
      {
        status: 500,
      },
    );
  }
}
