class AddUseridToPhones < ActiveRecord::Migration
  def change
    add_column :phones, :user_id, :integer
  end
end
