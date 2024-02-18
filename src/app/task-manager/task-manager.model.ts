export interface Task {
  id: number,
  creationDate: Date,
  category: string,
  status: string,
  planDate: Date,
  area: string,
  responsible: string
}


export interface TaskDetails {
  id: number,
  responsible: string,
  creationDate: Date,
  versionDate: Date,
  planDate: Date,
  startDate: Date,
  deliveryDate: Date,
  rnId: number,
  symbol: string,
  taskDescription: string,
  itemDescription: string,
  remarks: string,
  status: string,
  area: string,
  category: string,
  competenceLevel: string,
  caseType: string,
  initiator: string,
}

export interface Dictionary {
  id: string,
  value: string
}
