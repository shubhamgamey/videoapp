const pauseEvent =  {
    videoId: 5,
    user: "ABC",
    pauseTime : [123, 125, 128], // any of two
    pauseTime : 123,
  };


const skipEvent =  {
    videoId: 5,
    user: "ABC",
    isSkipped : true
  };

  const seekEvent =  {
    videoId: 5,
    user: "ABC",
    seekedTo : 123
  };

  // Analytics Events 
  // CTA on Videos
  // Poll 
  // Comments - No Text (Legal/Compliance)
  // Consolidated Comments (Intercative)
  // Request a Video / Ask QA ; Voting ; Trending
  // Content Category (Ref Vimeo/watch ; YT Explore) ; Carousel Ref Vimeo.com/watch
  
  /*

  Imp:
  Android Build Issues (https://stackoverflow.com/questions/68835157/error-when-trying-to-run-my-react-native-app-on-android/68841906#68841906)
  Interactive Images to enable Purchase
  Alternative to react-native-video 
  */