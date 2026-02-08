import { useState, useEffect } from "react";

const defaultCoordinates = {
  latitude: 35.58983017041625,
  longitude: -87.09630489349367,
};

export function useGeolocation() {
  const [coordinates, setCoordinates] = useState(defaultCoordinates);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if Geolocation API is supported
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by this browser");
      setIsLoading(false);
      return;
    }

    // Get current position once
    const successCallback = (position) => {
      const { latitude, longitude } = position.coords;
      setCoordinates({ latitude, longitude });
      setError(null);
      setIsLoading(false);
    };

    const errorCallback = (error) => {
      console.warn("Geolocation error:", error.message);
      setError(error.message);
      // Fall back to default coordinates
      setCoordinates(defaultCoordinates);
      setIsLoading(false);
    };

    // Options for getCurrentPosition
    const options = {
      enableHighAccuracy: false,
      timeout: 10000,
      maximumAge: 0,
    };

    // Fetch location once
    navigator.geolocation.getCurrentPosition(
      successCallback,
      errorCallback,
      options,
    );

    // Optional: Uncomment below to use watchPosition for continuous updates
    // const watchId = navigator.geolocation.watchPosition(
    //   successCallback,
    //   errorCallback,
    //   options,
    // );

    // // Cleanup watch on unmount
    // return () => {
    //   if (watchId) {
    //     navigator.geolocation.clearWatch(watchId);
    //   }
    // };
  }, []);

  return { coordinates, isLoading, error };
}
