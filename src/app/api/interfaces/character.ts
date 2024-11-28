export interface Character {
    info:    Info;
    results: ResultPagination[];
}

export interface Location {
    name: string;
    url:  string;
}


export interface Info {
    count: number;
    pages: number;
    next:  string;
    prev:  null;
}

export interface ResultPagination {
    id:       number;
    name:     string;
    status:   string;
    species:  string;
    type:     string;
    gender:   string;
    origin:   Location;
    location: Location;
    image:    string;
    episode:  string[];
    url:      string;
    created:  Date;
}