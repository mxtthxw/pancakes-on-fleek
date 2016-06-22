class AddAttachmentImageToPancakes < ActiveRecord::Migration
  def self.up
    change_table :pancakes do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :pancakes, :image
  end
end
