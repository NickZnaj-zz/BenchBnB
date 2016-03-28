class FixColumnName < ActiveRecord::Migration
  def change
    rename_column :benches, :long, :lng
  end
end
