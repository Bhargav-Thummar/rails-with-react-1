class Api::HomeController < ApplicationController
  def index
    render json: {
      data: {
        fname: 'Bhargav', lname: 'Thummar'
      }.to_json
    }
  end
end
