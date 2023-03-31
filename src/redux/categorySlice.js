import { createSlice } from "@reduxjs/toolkit"
import categoryReducer from "./categorySlice"; 
export const categorySlice = createSlice({
    name: "counter",
    initialState: {
        isLoading: false,
        data: [{id: '1', title: 'test 1'}]
    }, // giá trị bắt đầu
    reducers: { // mục đích các hàm reducers: set lại giá trị cho state bên trên này
        startLoading: (state) => {
            state.isLoading = true;
        },
        setCategory: (state, action) => {
            state.data = action.payload; // Đọc giá trị truyền vào
            state.isLoading = false;
        },
    }
});

export const { startLoading, setData } = categorySlice.actions;
export default categorySlice.reducer;