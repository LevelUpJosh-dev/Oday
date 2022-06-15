function BaseStyles() {
  return `
        /*
     * Globals
     */
    
    /* Custom default button */
    .btn-secondary,
    .btn-secondary:hover,
    .btn-secondary:focus {
        color: #333;
        text-shadow: none; /* Prevent inheritance from \`body\` */
    }
    
    
    /*
     * Base structure
     */
    
    body {
        text-shadow: 0 .05rem .1rem rgba(0, 0, 0, .5);
    }
    
    .cover-container {
        max-width: 42em;
    }
    
    
    /*
     * Header
     */
    
    .nav-masthead .nav-link {
        padding: .25rem 0;
        font-weight: 700;
        color: rgba(255, 255, 255, .5);
        background-color: transparent;
        border-bottom: .25rem solid transparent;
    }
    
    .nav-masthead .nav-link:hover,
    .nav-masthead .nav-link:focus {
        border-bottom-color: rgba(255, 255, 255, .25);
    }
    
    .nav-masthead .nav-link + .nav-link {
        margin-left: 1rem;
    }
    
    .nav-masthead .active {
        color: #fff;
        border-bottom-color: #fff;
    }
    `;
}

function PersonalStyles () {
  return `
    body {
      margin-top:20px;
      color: #1a202c;
      text-align: left;
      background-color: #e2e8f0;    
  }
  .main-body {
      padding: 15px;
  }
  .card {
      box-shadow: 0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06);
  }
  
  .card {
      position: relative;
      display: flex;
      flex-direction: column;
      min-width: 0;
      word-wrap: break-word;
      background-color: #fff;
      background-clip: border-box;
      border: 0 solid rgba(0,0,0,.125);
      border-radius: .25rem;
  }
  
  .card-body {
      flex: 1 1 auto;
      min-height: 1px;
      padding: 1rem;
  }
  
  .gutters-sm {
      margin-right: -8px;
      margin-left: -8px;
  }
  
  .gutters-sm>.col, .gutters-sm>[class*=col-] {
      padding-right: 8px;
      padding-left: 8px;
  }
  .mb-3, .my-3 {
      margin-bottom: 1rem!important;
  }
  
  .bg-gray-300 {
      background-color: #e2e8f0;
  }
  .h-100 {
      height: 100%!important;
  }
  .shadow-none {
      box-shadow: none!important;
  }
  `
}

export { BaseStyles, PersonalStyles };
