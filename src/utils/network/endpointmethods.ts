//  const baseURL:string =  "http://localhost:8000/api/v1";

// // Define an interface for route paths
// interface RoutePath {
//     path: string;
//     query?: string;
// }

// // // Define classes for different HTTP methods
// // class Route implements RoutePath {
// //     path: string;

// //     constructor(path: string) {
// //         this.path = path;
// //     }
// // }

// // Define classes for different HTTP methods
// class GetRoute implements RoutePath {
//     path: string;

//     constructor(path: string) {
//         this.path = path;
//     }
// }

// class PostRoute implements RoutePath {
//     path: string;

//     constructor(path: string) {
//         this.path = path;
//     }
// }

// class PutRoute implements RoutePath {
//     path: string;

//     constructor(path: string) {
//         this.path = path;
//     }
// }

// class DeleteRoute implements RoutePath {
//     path: string;

//     constructor(path: string) {
//         this.path = path;
//     }
// }

// // Define your EndpointsPath class
// class EndpointsPath {
//     baseURL: string;

//     constructor(baseURL: string) {
//         this.baseURL = baseURL;
//     }

//     // Factory methods to create routes
//     get(path: string): GetRoute {
//         return new GetRoute(`${path}`);
//     }

//     post(path: string): PostRoute {
//         return new PostRoute(`${path}`);
//     }

//     put(path: string): PutRoute {
//         return new PutRoute(`${path}`);
//     }

//     delete(path: string): DeleteRoute {
//         return new DeleteRoute(`${path}`);
//     }
//       // Add more factory methods for other HTTP methods as needed
//       patch(path: string): PutRoute {
//         return new PutRoute(`${path}`);
//     }

//     options(path: string): GetRoute {
//         return new GetRoute(`${path}`);
//     }

//     head(path: string): GetRoute {
//         return new GetRoute(`${path}`);
//     }

//     // Add more factory methods for other HTTP methods...
// }


// export const endpoints = new EndpointsPath(baseURL);

// // const userRoute = endpoints.get("/user");
// // const loginRoute = endpoints.post("/login");
// // const profileRoute = endpoints.get("/profile");
// // const registerRoute = endpoints.post("/register");


// ///Below code is not in use///and Useless used for testing////

// // console.log(userRoute.path); // Output: http://localhost:8000/api/v1 =>  /user
// // console.log(loginRoute.path); // Output: http://localhost:8000/api/v1 =>  /login
// // console.log(profileRoute.path); // Output: http://localhost:8000/api/v1 => /profile
// // console.log(registerRoute.path); // Output: http://localhost:8000/api/v1 =>  /register
