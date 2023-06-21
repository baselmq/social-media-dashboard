const userData = [
  {
    id:0,
    firstName: "mohammad",
    lastName: "Mahmoud",
    image:
      "https://img.freepik.com/premium-photo/portrait-smiling-young-man-looking-camera_33839-1731.jpg",
      imageCover:'',
    gender: "Male",
    location: "Amman - Jordan",
    birthDate: "June 26, 1980",
    email: "charles5182@ummoh.com",
    phone: "33757005467",
    statusLogin: "true",
    friends: [{}],
    friendsRequest: [{}],
    post: [
      {
        id:0,
        dataPost: { image: "", content: "", datePost: "" },
        likes: [{ fullName: "", email: "", like: true }],
        comments: [
          {
            fullName: "",
            imageUser: "",
            email: "",
            comment: "",
            dateComment: "",
          },
        ],
      },
    ],
  },
];

export default userData;
