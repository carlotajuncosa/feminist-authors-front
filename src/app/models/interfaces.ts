export interface IMostAwardWork {
    src: string;
    alt: string;
  }
export interface IAuthorImg {
    src: string;
    alt: string;
  }

export interface IAuthors {
    _id: string;
    name: string;
    birthdate: string;
    deathdate: string;
    nationality: string;
    ocupation: string;
    zodiacsign: string;
    authorImg: IAuthorImg;
    mostAwardWork: IMostAwardWork;
}

export interface IHackerImg{
  src: string;
  alt: string;
}
export interface IHackers {
  name: string;
  description: string;
  url: string;
  img: IHackerImg;
}

export interface IWaveImg{
  src: string;
  alt: string;
}
export interface IWaves {
  wave: string;
  century: string;
  description: string;
  img: IWaveImg;
}