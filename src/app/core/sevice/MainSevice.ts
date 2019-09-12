import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Attraction} from '../model/Attraction';
import {Place} from '../model/Place';
import {User} from '../model/User';
import {Transaction} from '../model/Transaction';

@Injectable({
  providedIn: 'root'
})

export class MainSevice {
  private attractionsUrl: string;
  private placesUrl: string;
  private transactionsUrl: string;
  private usersUrl: string;
  private statusUser = false;

  constructor(private http: HttpClient) {
    this.attractionsUrl = 'http://localhost:8080/attractions';
    this.placesUrl = 'http://localhost:8080/places';
    this.transactionsUrl = 'http://localhost:8080/transactions';
    this.usersUrl = 'http://localhost:8080/users';
  }

  public setStatusUser(status: boolean) {
    this.statusUser = status;
  }

  public getStatusUser(): boolean {
    return this.statusUser;
  }

  public findAllAttractions(): Observable<Attraction[]> {
    return this.http.get<Attraction[]>(this.attractionsUrl);
  }

  public findAllAttractionsWithKnapsackAlgorithm(city: string, capacity: string): Observable<Attraction[]> {
    return this.http.get<Attraction[]>(this.attractionsUrl + '/knapsack' + '?city=' + city + '&capacity=' + capacity);
  }

  public findAllAttractionsByPlaceId(placeId: string): Observable<Attraction[]> {
    return this.http.get<Attraction[]>(this.attractionsUrl + '/place/' + placeId);
  }

  public findAllPlaces(): Observable<Place[]> {
    return this.http.get<Place[]>(this.placesUrl);
  }

  public findAttractionByName(attraction: Attraction): Observable<Attraction> {
    return this.http.get<Attraction>(this.attractionsUrl + '/byName/' + attraction.name);
  }

  public findAllTransaction(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.transactionsUrl);
  }

  public saveAttraction(attraction: Attraction) {
    return this.http.post<Attraction>(this.attractionsUrl, attraction);
  }

  public deleteAttraction(id: number) {
    return this.http.delete(this.attractionsUrl + '/del/' + id);
  }

  public findAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  public saveUser(user: User) {
    return this.http.post<User>(this.usersUrl, user);
  }
}
