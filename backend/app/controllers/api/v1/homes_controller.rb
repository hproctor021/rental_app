class Api::V1::HomesController < ApplicationController

    skip_before_action :authorized, only: [:show, :index]

    def index
        homes = Home.all
        render json: homes, include:{photos:{only: [:image, :image_name]}}
    end

    def create
        home = Home.create(home_params)
        render json: home
    end

    def show
        home = Home.find(params[:id])
        render json: home, include:{photos:{only: [:image, :image_name]}}
    end


    private

    def home_params
        params.require(:home).permit(:location, :daily_price, :bedroom, :bathroom, :internet, :central_air, :heating, :tv, :pets_allowed)
    end

end
