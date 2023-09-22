import { NextResponse } from "next/server";

export function GET(coso, { params }) {
  console.log(params);
  return NextResponse.json("obteniendo producto " + params?.id);
}

export function PUT() {
  return NextResponse.json("actualizando producto");
}

export function DELETE() {
  return NextResponse.json("eliminando producto");
}
