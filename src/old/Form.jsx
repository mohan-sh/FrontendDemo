function Form() {
  return (
    <>

<div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Full viewport height
    backgroundColor: "rgba(0, 0, 0, 0.05)", // Light background for visibility
    gap: "20px",
  }}
>
<div
  className="form"
  style={{
    backgroundColor: "rgba(0, 0, 0, 0.02)", // Transparent background
    height: "fit-content",
    margin: "auto",
    minWidth: "300px",
    padding: "20px",
  }}
>
  <form>
    <fieldset>
      <legend style={{ color: "blue" }}>SLAM BOOK</legend>
      
      {/* Name Field */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
        <label htmlFor="name1" style={{ width: "120px" }}>Name</label>
        <input id="name1" type="text" name="name1" style={{ flex: "1" }} />
      </div>

      {/* Second Name Field */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
        <label htmlFor="name2" style={{ width: "120px" }}>Second Name</label>
        <input id="name2" type="text" name="name2" style={{ flex: "1" }} />
      </div>

      {/* Address Field */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
        <label htmlFor="address" style={{ width: "120px" }}>Address</label>
        <textarea id="address" name="address" style={{ flex: "1" }}></textarea>
      </div>

      {/* Phone Number Field */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
        <label htmlFor="phone" style={{ width: "120px" }}>Phone</label>
        <input type="number" id="phone" name="phone" style={{ flex: "1" }} />
      </div>

      {/* Gender Radio Buttons */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="gender" style={{ width: "120px", display: "block" }}>Gender</label>
        <label style={{ marginRight: "10px" }}>
          <input type="radio" name="gender" value="male" />
          Male
        </label>
        <label>
          <input type="radio" name="gender" value="female" />
          Female
        </label>
      </div>
    </fieldset>
  </form>
</div>
</div>

    
    </>
  );
}

export default Form;
