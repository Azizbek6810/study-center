import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TeachersRequest, TeachersResponse } from '../models/teachers.model';

@Injectable({
  providedIn: 'root',
})
export class TeachersService {
  url = 'https://67cedaad823da0212a80692e.mockapi.io/api/v1/teachers';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<TeachersResponse[]>(this.url);
  }

  add(model: TeachersRequest) {
    return this.http.post<TeachersResponse>(this.url, model);
  }
}
