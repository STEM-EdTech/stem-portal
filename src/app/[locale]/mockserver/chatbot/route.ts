"use server";

import { NextRequest, NextResponse } from 'next/server';

const defaultMessages = [
    "Did you know that a day on Venus is longer than a year on Venus?",
    "The shortest war in history lasted only 38-45 minutes.",
    "A group of flamingos is called a 'flamboyance'.",
    "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible.",
    "The Eiffel Tower can be 15 cm taller during the summer due to the expansion of the iron on hot days.",
    "A day on Mercury is longer than a year on Mercury.",
    "The longest place name on the planet is 85 letters long.",
    "The shortest commercial flight in the world takes place in the Scottish islands and lasts just 57 seconds.",
    "The first product to have a bar code was Wrigley's gum.",
    "A blue whale's heart can weigh as much as an automobile."
];

const getRandomDefaultMessage = () => {
    const randomIndex = Math.floor(Math.random() * defaultMessages.length);
    return defaultMessages[randomIndex];
};

export async function POST(req: NextRequest) {
    console.log("Request received at /mockserver/chatbot");
    const { message } = await req.json();

    if (!message) {
        return NextResponse.json({ message: 'Message is required' }, { status: 400 });
    }

    return NextResponse.json({ message: getRandomDefaultMessage() }, { status: 200 });
}
