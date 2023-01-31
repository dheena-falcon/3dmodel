import mongoose from "mongoose";

const DataSchema = mongoose.Schema({
    data: {
      type: Array,
      required: true,
    },
    step_count: {
      type: Number,
      required: true,
    },
    product_name: {
      type: String,
      required: true,
    },
    product_img: {
        type: String,
        required: true,
      },
  });


  const DataModel = mongoose.model("DataModel", DataSchema);

export default DataModel;