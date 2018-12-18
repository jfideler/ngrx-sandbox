export class ContentModel {
  id: number;
  description: string;
  name: string;
  model: string;
  url: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  crew: string;
  passengers: string;
  starship_class: string;
  detailEvents: DetailEvent[];

  constructor(data: any = null) {

    if (data) {
      Object.assign(this, data);
    }

    this.detailEvents = [];
  }
}

export class DetailEvent {
  id: number;
  displayId: number;
  description: string;

  constructor(data: any = null) {

    if (data) {
      Object.assign(this, data);
    }
  }
}
