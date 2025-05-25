import React from 'react';
import './App.css'; // Make sure your CSS file is named App.css or update the path accordingly

const PropertyForm = () => {
  return (
    <div className="property-form-container">
      <h2 className="form-title">Post Your Ad</h2>

      <div className="form-group">
        <label>Type *</label>
        <div>
          <button className="form-control">Flats / Apartments</button>
          <button className="form-control">Independent / Builder Floors</button>
          <button className="form-control">Farm House</button>
          <button className="form-control">House & Villa</button>
        </div>
      </div>

      <div className="form-group">
        <label>BHK</label>
        <div>
          <button className="form-control">1</button>
          <button className="form-control">2</button>
          <button className="form-control">3</button>
          <button className="form-control">4</button>
          <button className="form-control">4+</button>
        </div>
      </div>

      <div className="form-group">
        <label>Bathrooms</label>
        <div>
          <button className="form-control">1</button>
          <button className="form-control">2</button>
          <button className="form-control">3</button>
          <button className="form-control">4</button>
          <button className="form-control">4+</button>
        </div>
      </div>

      <div className="form-group">
        <label>Furnishing</label>
        <div>
          <button className="form-control">Furnished</button>
          <button className="form-control">Semi-Furnished</button>
          <button className="form-control">Unfurnished</button>
        </div>
      </div>

      <div className="form-group">
        <label>Project Status</label>
        <div>
          <button className="form-control">New Launch</button>
          <button className="form-control">Ready to Move</button>
          <button className="form-control">Under Construction</button>
        </div>
      </div>

      <div className="form-group">
        <label>Listed by</label>
        <div>
          <button className="form-control">Builder</button>
          <button className="form-control">Dealer</button>
          <button className="form-control">Owner</button>
        </div>
      </div>

      <div className="form-group">
        <label>Super Builtup area sqft *</label>
        <input className="form-control" type="text" />
      </div>

      <div className="form-group">
        <label>Carpet Area sqft *</label>
        <input className="form-control" type="text" />
      </div>

      <div className="form-group">
        <label>Maintenance (Monthly)</label>
        <input className="form-control" type="text" />
      </div>

      <div className="form-group">
        <label>Total Floors</label>
        <input className="form-control" type="text" />
      </div>

      <div className="form-group">
        <label>Floor No</label>
        <input className="form-control" type="text" />
      </div>

      <div className="form-group">
        <label>Car Parking</label>
        <div>
          <button className="form-control">0</button>
          <button className="form-control">1</button>
          <button className="form-control">2</button>
          <button className="form-control">3</button>
          <button className="form-control">3+</button>
        </div>
      </div>

      <div className="form-group">
        <label>Facing</label>
        <select className="form-control">
          <option value="">Select</option>
          <option>North</option>
          <option>South</option>
          <option>East</option>
          <option>West</option>
        </select>
      </div>

      <div className="form-group">
        <label>Project Name</label>
        <input className="form-control" type="text" />
      </div>

      <div className="form-group">
        <label>Ad Title *</label>
        <input className="form-control" type="text" />
      </div>

      <div className="form-group">
        <label>Description *</label>
        <textarea className="form-control" rows="4" maxLength="4096"></textarea>
      </div>

      <div className="form-group">
        <label>Price *</label>
        <input className="form-control" type="text" placeholder="₹" />
      </div>

      <div className="form-group">
        <label>Upload Photos (up to 20)</label>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px' }}>
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="form-control"
              style={{
                height: '60px',
                background: '#eee',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {i === 0 ? 'Add Photo' : <span>📷</span>}
            </div>
          ))}
        </div>
      </div>

      <div className="form-group">
        <label>State *</label>
        <select className="form-control">
          <option value="">Select State</option>
        </select>
      </div>

      <div className="form-group">
        <label>Your Name</label>
        <input className="form-control" type="text" value="Pranjal Saraswat" readOnly />
      </div>

      <div className="form-group">
        <label>Your Phone Number</label>
        <input className="form-control" type="text" value="" readOnly />
      </div>

      <button className="submit-button" disabled>Post Now</button>
    </div>
  );
};

export default PropertyForm;
