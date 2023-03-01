import filmReducer from "./reducer/film";
import configReducer from "./reducer/config";
import{ loginSlice } from '../pages/_duck/loginReducer'
import adminReducer from "./reducer/admin";
import { configureStore } from "@reduxjs/toolkit";
import { detailFilmSlicer } from "../pages/HomeTemplate/DetailPage/duck/detailReducer";
import { bookingSlicer } from "../pages/HomeTemplate/BookingPage/duck/bookingReducer";
import { manageFilmReducer } from "../pages/AdminTemplate/ManageFilmPage/duck/manageFilmReducer";
import { adminUserReducer } from "../pages/AdminTemplate/UserPage/duck/adminUserReducer";
import { newFilmReducer } from "../pages/AdminTemplate/AddNewPage/duck/newFilmReducer";
import { contentUserReducer } from "../pages/UserTemplate/components/content/duck/contentUserReducer";
import { bookingSlice } from "../pages/HomeTemplate/BookingPage/_components/BookingDetail/duck/booking";
export const store = configureStore({
    reducer: {
        film:filmReducer,
        config: configReducer,
        user:loginSlice.reducer,
        admin: adminReducer,
        filmDetail: detailFilmSlicer.reducer,
        booking: bookingSlicer.reducer,
        manageFilm : manageFilmReducer.reducer,
        adminUser : adminUserReducer.reducer,
        adminNewFilm : newFilmReducer.reducer,
        userContent : contentUserReducer.reducer,
        bookingRequest: bookingSlice.reducer
    },
}
)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch