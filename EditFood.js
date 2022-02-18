import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFood, updatedFood } from "../../JS/actions/food";

import "./Add.css";

function EditFood({ id }) {
  const [food, setfood] = useState({});

  const [show, setshow] = useState(false);

  const dispatch = useDispatch();

  const foods = useSelector((state) => state.foodrReducer.food);

  return (
    <div className="addmodal">
      <button
        onClick={() => setshow(!show)}
        style={{ backgroundColor: "green" }}
      >
        {" "}
        Edit Food
      </button>

      {show ? (
        <div>
          <div class="modal">
            <div class="modal__details">
              <h1 class="modal__title">Edit Food</h1>
            </div>
            <input
              type="text"
              placeholder="Add your food image"
              onChange={(e) => setfood({ ...food, image: e.target.value })}
            />
            <input
              type="text"
              placeholder="Food Name"
              onChange={(e) => setfood({ ...food, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Food Category"
              onChange={(e) => setfood({ ...food, category: e.target.value })}
            />
            <input
              type="number"
              placeholder="Food Price"
              onChange={(e) => setfood({ ...food, price: e.target.value })}
            />
            <button
              onClick={() => {
                dispatch(
                  updatedFood({
                    id,
                    food,
                  })
                );
                dispatch(getFood());
                setshow(!show);
              }}
            >
              Edit
            </button>
            <p class="link-2" onClick={() => setshow(!show)}></p>{" "}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default EditFood;
