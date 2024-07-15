import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SelectBudgetOptions, SelectTravelesList } from '@/constants/options';
import React, { useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

function CreateTrip() {
  const [place, setPlace] = useState();

  const [formData, setFormData] = useState([]);
  
  const handleInputChange = (name, value)=>{
    setFormData({
      ...formField,
      [name]:value
    })
  }

  return (
    <div className="container mx-auto px-4 sm:px-10 md:px-32 lg:px-56 xl:px-64 mt-10">
      <h2 className="font-bold text-3xl text-center">Tell Us Your Travel Preferences</h2>
      <p className="mt-3 text-gray-500 text-xl text-center">
        Just provide some basic information, and our trip planner will generate a customized itinerary based on your preferences.
      </p>
    
      <div className="mt-16 flex flex-col gap-12">
        <div>
          <h3 className="text-xl mb-3 font-medium">What is your destination of choice?</h3>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            selectProps={{
              placeholder: 'Enter your destination...',
              value: place,
              onChange: (value) => {
                setPlace(value);
                console.log(value);
                handleInputChange('location',v);
              },
            }}
          />
        </div>

        <div>
          <h3 className="text-xl mb-3 font-medium">How many days are you planning your trip?</h3>
          <Input placeholder="Enter the number of days" type="number" className="w-full" />
        </div>

        <div>
          <h3 className="text-xl mb-3 font-medium">What is your budget?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5">
            {SelectBudgetOptions.map((item, index) => (
              <div key={index} className="flex flex-col items-center p-4 border rounded-lg hover:shadow-lg text-center cursor-pointer">
                <span className="text-4xl mb-2">{item.icon}</span>
                <h2 className="font-bold text-lg">{item.title}</h2>
                <p className="text-sm text-gray-500 mt-1">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        
        <div>
          <h3 className="text-xl mb-3 font-medium">Who do you plan on traveling with on your next adventure?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5">
            {SelectTravelesList.map((item, index) => (
              <div key={index} className="flex flex-col items-center p-4 border rounded-lg hover:shadow-lg text-center cursor-pointer">
                <span className="text-4xl mb-2">{item.icon}</span>
                <h2 className="font-bold text-lg">{item.title}</h2>
                <p className="text-sm text-gray-500 mt-1">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='my-10 justify-end flex'>
        <Button>Generate Trip</Button>
      </div>
    </div>
  );
}

export default CreateTrip;
