import React, { useState } from "react";
const DateTimePicker = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [period, setPeriod] = useState("AM");

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handlePeriodChange = (e) => {
    setPeriod(e.target.value);
  };

  return (
    <>
      <form class="flex justify-center">
        <div class="   w-4/6 mt-10 mb-10 h-full shadow-md border border-gray-300">
          <div>
            <img
              src="https://files.jotform.com/jufs/ugurg/form_files/Pink%20Modern%20Dance%20Competition%20Poster%20(1).653fd007854806.52136831.png?md5=Y9rQFaMaatJAjrqgG9Y7bg&expires=1724140286"
              class="w-full"
            />
            <div class="mx-8">
              <h1 className="text-3xl font-semibold">Dance Registration</h1>
              <p class="font-normal mt-1">
                Fill the registration form below keenly to enter the dancing
                competition
              </p>
              <h1 class="text-2xl mt-4">Name</h1>
              <div class="flex justify-between">
                <div>
                  <input
                    type="text"
                    placeholder=""
                    class="border border-gray-300 p-1 w-64 mt-2 mb-4 h-10"
                  />
                  <p>First Name</p>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder=""
                    class="border border-gray-300 p-1 w-64 mt-2 mb-4 h-10"
                  />
                  <p>Last Name</p>
                </div>
              </div>
              <div class="flex justify-between mt-4">
                <div>
                  <p class="text-2xl">E-mail</p>
                  <input
                    type="text"
                    placeholder="ex: myname@example.com"
                    class="border border-gray-300 p-1 w-64 mt-4 mb-4 h-10"
                  />
                  <p>example@example.com</p>
                </div>
                <div>
                  <p class="text-2xl">Phone Number</p>
                  <input
                    type="text"
                    placeholder="(000) 000-0000"
                    class="border border-gray-300 p-1 w-64 mt-4 mb-4 h-10"
                  />
                </div>
              </div>
              <div>
                <p class="text-2xl mt-4 ">Gender</p>
                <div class="flex  mt-2 text-1xl space-x-96">
                  <div class="inline-flex items-center">
                    <input type="radio" name="gender" value="male" class="mr-1"/>
                    Male
                  </div>
                  <div class="inline-flex items-center">
                    <input type="radio" name="gender" value="female" class="mr-1"/>
                    Female
                  </div>
                </div>
                <div>
                  <p class="mt-5 text-2xl">Address</p>
                  <input
                    type="text"
                    placeholder=""
                    class="border border-gray-300 p-1 w-full mt-4 mb-4 h-10"
                  />
                </div>
                <div>
                  <p class="mt-2">street address</p>
                  <input
                    type="text"
                    placeholder=""
                    class="border border-gray-300 p-1 w-full mt-4 mb-4 h-10"
                  />
                </div>
                <div>
                  <p>Street Address Line 2</p>
                </div>
                <div class="flex justify-between">
                  <div>
                    <input
                      type="text"
                      placeholder=""
                      class="border border-gray-300 p-1 w-80 mt-4 mb-4 h-10"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder=""
                      class="border border-gray-300 p-1 w-80 mt-4 mb-4 h-10"
                    />
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder=""
                    class="border border-gray-300 p-1 w-full mt-4 mb-4 h-10"
                  />
                  <p>Postal / Zip Code</p>
                </div>
                <div>
                  <p class="mt-4 text-2xl">Type of Dance</p>
                  <div class="flex  mt-6 text-1xl space-x-96">
                    <div class="">
                      <input type="radio" class="mr-1"/>
                      Salsa
                      <br />
                      <input type="radio" class="mt-3 mr-1" />
                      Tango
                      <br />
                      <input type="radio" class="mt-3 mr-1" />
                      Club
                      <br />
                      <input type="radio" class="mt-3 mr-1" />
                      Others
                    </div>

                    <div class="">
                      <input type="radio" class="mr-1"/>
                      Bachata
                      <br />
                      <input type="radio" class="mt-2 mr-1" />
                      Hip Hop
                    </div>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between">
                  <p class="mt-6 text-2xl">Start Day & Time</p>
                  <div className="flex flex-col space-y-4 p-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Date
                      </label>
                      <input
                        type="date"
                        value={date}
                        onChange={handleDateChange}
                        className="mt-1 block w-52 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>

                    <div className="flex items-center space-x-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Time
                        </label>
                        <input
                          type="time"
                          value={time}
                          onChange={handleTimeChange}
                          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          AM/PM
                        </label>
                        <select
                          value={period}
                          onChange={handlePeriodChange}
                          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        >
                          <option value="AM">AM</option>
                          <option value="PM">PM</option>
                        </select>
                      </div>
                    
                    </div>
                    </div>
                  </div>
                  <div>
                    <p class="mt-4 text-2xl">Commments</p>
                    <textarea
                      type="text"
                      placeholder=""
                      class="border border-gray-300 p-1 w-full mt-4 mb-4 h-48"
                    ></textarea>
                  </div>
                  <div class="flex justify-center mb-10">
                  <button class="bg-blue-800 text-white text-1xl p-2 mt-3 w-40 rounded-md ">
                  Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default DateTimePicker;
