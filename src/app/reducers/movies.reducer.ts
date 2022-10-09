import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
const baseUrl = process.env.REACT_APP_BASE_URL
const authToken = process.env.REACT_APP_AUTH_TOKEN


interface IFilmsState {
  popular: {
   totalPages: null,
   results: any[],
  },
  genre: any [],
  filmPersonalPage: null,
  recommendations: any[],
  searchFilms: {
    searchTotalPages: null,
    searchResults: any[],
    query: string,
  },
  selectedFilms: any[];
};

const initialState = {
  popular: {
    totalPages: null,
    results: [],
  },
  genre: [],
  filmPersonalPage: null,
  recommendations: [],
  searchFilms: {  
    searchTotalPages: null,
    searchResults: [],
    query: "",
  },
  selectedFilms: [],
} as any;

export const fetchMoviesList = createAsyncThunk(
  'movies/fetchMoviesList',
  async (page : number = 1) => {
    const response = await fetch(`${baseUrl}/3/movie/550?lang=ru&api_key=${authToken}&page=${page}`)
    .then(res => res.json())
    .then(json => json);

    return response.results;
  }
)

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMoviesList.fulfilled, (state, action) => {
      state.popular.results.push(...action.payload.results);
      state.popular.totalPages = action.payload.totalPages;
    })
  },
})



export default moviesSlice.reducer;

