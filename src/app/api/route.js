import connectMongoDb from "../libs/mongodb";
import Topic from "../models/topic";
import { connect } from "mongoose"
import { NextResponse } from "next/server";


//post or add a topic

export async function POST(request){

    const{title, description} = await request.json()

    await connectMongoDb();
    await Topic.create({title,description})

    return NextResponse.json({message: "Topic created"}, {status: 201})
}

//fetch all topics

export async function GET(){
    await connectMongoDb();
   const topics = await Topic.find()
    
   return NextResponse.json({topics})
}


//delete a topic

export async function DELETE(request){

    const id = request.nextUrl.searchParams.get("id") //Technique to search id and delete in next JS via params

    await connectMongoDb();
    await Topic.findByIdAndDelete(id)
    return NextResponse.json({message: 'Topic Deleted'}, {status: 200})
}

