class Api::V1::ReservationsController < ApplicationController
    skip_before_action :authorized, only: [:create, :index, :show]

    def index
        @reservations = Reservation.all
        render json: @reservations
    end

    def create
        @reservation = Reservation.create(reservation_params)
        render json: @reservation
    end 

    private 
    
    def reservation_params
        params.require(:reservation).permit(:home_id, :user_id, :start_date, :end_date)
    end 

end
