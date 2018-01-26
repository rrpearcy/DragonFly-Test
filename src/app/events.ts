export interface Events {
  id: string;
  name: string;
  description: string;
  url: string;
  location: Location;
  // images: Images;
  // comments: Comments;
}

export class Location {
  name: any;
  address: any;
  city: any;
  state: any;
}

// export class Images {
//   id: string;
//   caption: string;
// }
//
// export class Comments {
//
// }
