import connectMongoDB from "../../../../lib/mongoose";
import Project from "../../../models/projects";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, description } = await request.json();
  await connectMongoDB();
  await Project.create({ title, description });
  return NextResponse.json({ message: "Project Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const topics = await Project.find();
  return NextResponse.json({ topics });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Project.findByIdAndDelete(id);
  return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
}

