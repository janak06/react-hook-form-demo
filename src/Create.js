import { useForm } from "react-hook-form";
import * as yup from "yup";
import "yup-phone-lite";
import { yupResolver } from "@hookform/resolvers/yup";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Create() {
  const navigate = useNavigate();
  const schema = yup
    .object({
      proof: yup.number(),
      name: yup.string().required(),
      age: yup.string().required(),
      gender: yup.string().required(),
      mobile: yup.string().phone("IN", "Please enter a valid phone number"),
      eNumber: yup.string().phone("IN", "Please enter a valid phone number"),
      govt: yup
        .string()
        .test("length", "Please enter a 12-digit ID", function (value) {
          const govtValue = yup.ref("proof").getter(this.parent);
          return value.length && govtValue === 1 ? value.length === 12 : true;
        })
        .test("length", "Please enter a 10-digit ID", function (value) {
          const govtValue = yup.ref("proof").getter(this.parent);
          return value.length && govtValue === 2 ? value.length === 10 : true;
        }),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("http://localhost:5000/create", data)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h5>Personal Detail</h5>
          <div className="row ">
            <div className="col-6 form-group">
              <label for="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                {...register("name")}
                placeholder="Enter your name"
              />
              {errors?.name && (
                <p style={{ color: "red" }}>{errors.name.message}</p>
              )}
            </div>

            <div className="col-6 mt-2 form-group">
              <label for="gender">Sex</label>
              <select
                {...register("gender")}
                className="form-control"
                id="gender"
              >
                <option value="">select sex</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
              </select>
              {errors?.gender && (
                <p style={{ color: "red" }}>{errors.gender.message}</p>
              )}
            </div>
            <div className="col-6 mt-2 form-group">
              <label for="mobile">Mobile number</label>
              <input
                type="tel"
                className="form-control"
                {...register("mobile")}
                id="mobile"
                placeholder="Enter your mobile number"
              />
              {errors?.mobile && (
                <p style={{ color: "red" }}>{errors.mobile.message}</p>
              )}
            </div>
            <div className="col-6 mt-2 form-group">
              <label for="age">Age</label>
              <input
                type="number"
                className="form-control"
                id="age"
                {...register("age")}
                placeholder="Enter your age"
              />
              {errors?.age && (
                <p style={{ color: "red" }}>{errors.age.message}</p>
              )}
            </div>
            <div className="col-12 d-flex align-items-center mt-2 form-group">
              <label for="govt">Govt issued ID</label>
              <div className="col-4 ms-2 me-2">
                <select
                  className="form-control"
                  id="proof"
                  {...register("proof")}
                >
                  <option value={1}>Aadhar</option>
                  <option value={2}>Pan</option>
                </select>
              </div>
              <div className="col-6">
                <input
                  type="text"
                  {...register("govt")}
                  className="form-control"
                  id="govt"
                  placeholder="Enter govt id number"
                />
                {errors?.govt && (
                  <p style={{ color: "red" }}>{errors.govt.message}</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h5>Contact Detail</h5>
          <div className="row ">
            <div className="col-12 d-flex align-items-center mt-2 form-group">
              <label for="guardian">Guardian detail</label>
              <div className="col-4 ms-2 me-2">
                <select
                  className="form-control"
                  id="gType"
                  {...register("gType")}
                >
                  <option value={1}>Test</option>
                  <option value={2}>Test1</option>
                </select>
              </div>
              <div className="col-6">
                <input
                  type="text"
                  className="form-control"
                  id="guardian"
                  {...register("guardian")}
                  placeholder="Enter guardian name"
                />
              </div>
            </div>
            <div className="col-6 mt-2 form-group">
              <label for="email">Email</label>
              <input
                type="text"
                className="form-control"
                {...register("email")}
                id="email"
                placeholder="Enter email"
              />
            </div>
            <div className="col-6 mt-2 form-group">
              <label for="eNumber">Emergency contact number</label>
              <input
                type="text"
                className="form-control"
                {...register("eNumber")}
                id="eNumber"
                placeholder="Enter emergency contact number"
              />
              {errors?.eNumber && (
                <p style={{ color: "red" }}>{errors.eNumber.message}</p>
              )}
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h5>Address Detail</h5>
          <div className="row ">
            <div className="col-6 form-group">
              <label for="address">Address</label>
              <input
                type="text"
                className="form-control"
                {...register("address")}
                id="address"
                placeholder="Enter address"
              />
            </div>
            <div className="col-6 form-group">
              <label for="state">State</label>
              <input
                type="text"
                className="form-control"
                {...register("state")}
                id="state"
                placeholder="Enter state"
              />
            </div>
            <div className="col-6 mt-2 form-group">
              <label for="country">Country</label>
              <input
                type="text"
                className="form-control"
                {...register("country")}
                id="country"
                placeholder="Enter country"
              />
            </div>
            <div className="col-6 mt-2 form-group">
              <label for="pincode">Pincode</label>
              <input
                type="text"
                className="form-control"
                {...register("pincode")}
                id="pincode"
                placeholder="Enter pincode"
              />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h5>Other Detail</h5>
          <div className="row ">
            <div className="col-6 form-group">
              <label for="occupation">Occupation</label>
              <input
                type="text"
                className="form-control"
                {...register("occupation")}
                id="occupation"
                placeholder="Enter occupation"
              />
            </div>
            <div className="col-6 form-group">
              <label for="religion">Religion</label>
              <input
                type="text"
                className="form-control"
                {...register("religion")}
                id="religion"
                placeholder="Enter religion"
              />
            </div>
            <div className="col-6 mt-2 form-group">
              <label for="marital">Marital status</label>
              <select
                className="form-control"
                id="marital"
                {...register("marital")}
              >
                <option value={1}>Married</option>
                <option value={2}>Unmarried</option>
              </select>
            </div>
            <div className="col-6 mt-2 form-group">
              <label for="blood">Blood group</label>
              <input
                type="text"
                className="form-control"
                {...register("blood")}
                id="blood"
                placeholder="Enter blood group"
              />
            </div>
            <div className="col-6 mt-2 form-group">
              <label for="nationality">Nationality</label>
              <input
                type="text"
                className="form-control"
                {...register("nationality")}
                id="nationality"
                placeholder="Enter nationality"
              />
            </div>
            <div className="col-6 mt-2 form-group">
              <label for="pincode">Pincode</label>
              <input
                type="text"
                className="form-control"
                {...register("pincode")}
                id="pincode"
                placeholder="Enter pincode"
              />
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary mt-4 mb-4">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Create;
