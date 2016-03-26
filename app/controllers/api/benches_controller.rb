class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.in_bounds(params[:bounds])
    # @benches = Bench.all
    render :index
  end

  def new
  end
end
