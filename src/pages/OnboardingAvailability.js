            {/* Availability Selection */}
            <div className="mt-6">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold text-center">Select Your Availability</h1>
                    <button onClick={() => setExpandedAvailability(!expandedAvailability)}>
                        {expandedAvailability ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                </div>
                {expandedAvailability && (
                    <div className="grid grid-cols-1 gap-2">
                        {days.map((day) => (
                            <div key={day} className="text-center">
                                <h3 className="text-lg font-semibold">{day}</h3>
                                <div className="flex justify-center space-x-2">
                                    {times.map((time) => (
                                        <button
                                            key={time}
                                            className={`border border-gray-300 rounded-lg px-3 py-2 text-sm ${availability[day]?.has(time) ? "bg-green-500 text-white" : "bg-white"}`}
                                            onClick={() => toggleAvailability(day, time)}
                                        >
                                            {time}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>