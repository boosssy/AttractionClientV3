import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Attraction} from '../model/Attraction';
import {Place} from '../model/Place';
import {User} from '../model/User';
import {Transaction} from '../model/Transaction';
import {SessionUser} from '../model/SessionUser';

@Injectable({
  providedIn: 'root'
})

export class MainSevice {
  private attractionsUrl: string;
  private placesUrl: string;
  private transactionsUrl: string;
  private usersUrl: string;
  private sessionUserUrl: string;
  private statusUser = false;

  constructor(private http: HttpClient) {
    this.attractionsUrl = 'http://localhost:8080/attractions';
    this.placesUrl = 'http://localhost:8080/places';
    this.transactionsUrl = 'http://localhost:8080/transactions';
    this.usersUrl = 'http://localhost:8080/users';
    this.sessionUserUrl = 'http://localhost:8080/session-user';
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

  // todo dodane do pobierania 3 najlepszych ofert na glownej stronie
  public findAttractionByAttractiveness(attraction: Attraction): Observable<Attraction> {
    return this.http.get<Attraction>(this.attractionsUrl + '/byAttractiveness/' + attraction.attractiveness);
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

  public findUserById(id: string): Observable<User> {
    return this.http.get<User>(this.usersUrl + '/' + id);
  }

  public saveUser(user: User) {
    return this.http.post<User>(this.usersUrl, user);
  }

  public findSessionUserById(userId: string) {
    return this.http.get<SessionUser>(this.sessionUserUrl + '/' + userId);
  }

  public editSessionUser(sessionUser: SessionUser, id: string) {
    return this.http.put(this.sessionUserUrl + '/' + id, sessionUser);
  }
}
