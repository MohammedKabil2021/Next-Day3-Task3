import { std_data } from "./data";
import { v4 as uuidv4 } from "uuid";

export async function GET() {
    return Response.json(std_data);
}

export async function POST(req) {
    const newStd = await req.json();
    const std = { id: uuidv4(), ...newStd };
    std_data.push(std);
    return Response.json(std);
}

export async function PUT(req) {
    const { id, ...updatedData } = await req.json();

    const index = std_data.findIndex((std) => std.id === id);
    if (index === -1) {
        return new Response("Student not found", { status: 404 });
    }

    std_data[index] = { ...std_data[index], ...updatedData };
    return Response.json({ message: "Student updated", student: std_data[index] });
}

export async function DELETE(req) {
    const { id } = await req.json();
    const index = std_data.findIndex((std) => std.id === id);
    if (index === -1) {
        return new Response("Student not found", { status: 404 });
    }
    std_data.splice(index, 1);
    return Response.json({ message: "Student deleted" });
}
