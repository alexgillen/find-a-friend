import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const interests = {
    "Lifestyle": ["Content Creator", "Entrepreneur", "Gamer", "Athlete", "Teacher", "Pet Parent", "Stay at Home Mom", "Night Owl", "Early Bird", "Foodie", "Traveler", "Outdoorsy", "Musician"],
    "TV & Movies": ["Romance", "True Crime", "Action", "Anime", "The Office", "Marvel", "Disney", "Reality TV", "Fantasy", "Sci-Fi", "Sitcoms", "Star Wars", "Lord of the Rings", "Musical Theatre"],
    "Activities": ["Art", "Gardening", "Baking", "Gaming", "Photography", "Reading", "Pickleball", "Skiing", "Boating", "Sports", "Cooking", "Dancing", "Hiking", "Traveling", "Running", "Yoga", "Pilates", "Board Games", "Scrapbooking", "Thrifting"],
    "Music": ["Pop", "Rock", "Metal", "Country", "EDM", "Hip-Hop", "Classical", "Jazz", "Indie", "Reggae", "Folk", "Punk"],
    "Personality Type": ["Extrovert", "Introvert", "Planner", "Spontaneous", "Homebody"]
};

const OnboardingInterests = () => {
    const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
    const [selectedInterests, setSelectedInterests] = useState(new Set());
    const categories = Object.keys(interests);

    const slideLeft = () => {
        if (currentCategoryIndex > 0) {
            setCurrentCategoryIndex((prev) => prev - 1);
        }
    };

    const slideRight = () => {
        if (currentCategoryIndex < categories.length - 1) {
            setCurrentCategoryIndex((prev) => prev + 1);
        }
    };

    const toggleInterest = (interest) => {
        setSelectedInterests((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(interest)) {
                newSet.delete(interest);
            } else {
                newSet.add(interest);
            }
            return newSet;
        });
    };

    const handleNext = () => {
        if (currentCategoryIndex < categories.length - 1) {
            slideRight();
        }
    };

    const handleSubmit = () => {
        // Handle submit logic here
        console.log("Responses submitted!");
    };

    return (
        <div className="flex flex-col h-screen px-6 py-10 overflow-y-auto">
            {/* Progress Indicator */}
            <div className="flex justify-center space-x-2 mb-10">
                <div className="w-8 h-2 bg-orange-400 rounded-full"></div>
                <div className="w-8 h-2 bg-orange-400 rounded-full"></div>
                <div className="w-8 h-2 bg-orange-400 rounded-full"></div>
                <div className="w-8 h-2 bg-gray-300 rounded-full"></div>
            </div>

            {/* Centered Header */}
            <div className="flex flex-col justify-center items-center h-1/3">
                <h1 className="text-2xl font-bold text-center">Select Your Interests</h1>
            </div>

            {/* Category Navigation */}
            <div className="flex justify-between items-center mb-4 mt-4">
                {currentCategoryIndex > 0 && (
                    <button onClick={slideLeft} className="text-xl text-gray-600">
                        <FaChevronLeft />
                    </button>
                )}
                <h2 className="text-xl font-bold text-center w-full">{categories[currentCategoryIndex]}</h2>
                {currentCategoryIndex < categories.length - 1 && (
                    <button onClick={slideRight} className="text-xl text-gray-600">
                        <FaChevronRight />
                    </button>
                )}
            </div>

            {/* Category Interests (Scrollable Options) */}
            <div className="max-h-64 overflow-y-auto">
                <div className="grid grid-cols-2 gap-2 mt-4">
                    {interests[categories[currentCategoryIndex]].map((interest) => (
                        <button
                            key={interest}
                            onClick={() => toggleInterest(interest)}
                            className={`w-full border border-gray-300 rounded-lg py-3 text-lg ${selectedInterests.has(interest) ? "bg-gray-200" : "bg-white"}`}
                        >
                            {interest}
                        </button>
                    ))}
                </div>
            </div>

            {/* Bottom Button */}
            <div className="py-6">
                <button
                    onClick={currentCategoryIndex === categories.length - 1 ? handleSubmit : handleNext}
                    className="w-full text-white text-lg font-semibold py-3 rounded-lg bg-orange-400"
                >
                    {currentCategoryIndex === categories.length - 1 ? "Continue" : "Next"}
                </button>
            </div>
        </div>
    );
};

export default OnboardingInterests;
