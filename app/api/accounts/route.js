import { NextResponse } from "next/server";
import { mysql } from "@/libs/mysql";

export async function GET() {
  try {
    const responses = await mysql.query("SELECT * FROM `jildam_accounts`");

    return NextResponse.json(responses);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const { email, username, password } = await request.json();
    const response = await mysql.query("INSERT INTO `jildam_users` SET ?", {
      email,
      username,
      password,
    });
    console.log(response);

    return NextResponse.json({
      id: response.insertId,
      email,
      username,
      password,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
