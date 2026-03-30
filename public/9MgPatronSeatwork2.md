# Seatwork #2 - Getting to know CSS Position and z-index.
### This seatwork will ask you to implement the different CSS position on a given code.
### short link to this .md file is: https://bit.ly/4c61P9K
#### Resources (also found in Khub week 5)
- [4 Minute Youtube Video on CSS Position](https://www.youtube.com/watch?v=YEmdHbQBCSQ)
- [CSS Position Tutorial](https://roycan.github.io/CssPositioningZIndexLab/)

### Instructions: 
1. This is individual submission in khub, but you can work with a partner.  When you submit in khub please place both your names in the submission bin.
2. Guided Activity (30 minutes), please follow what is being required.  

    - Make a copy of this .md file to your Q4 repository and name it as **SectionLNseatwork2.md** example **9LiCruzSeatwork2.md**. Place it in your q4 repository vscode local computer. Committing frequently to your Github repository.  
    - Copy the code below and paste it inside a new file (name it as SectionLNseatwork2.html). Place this file in the same location where the .md file is saved. 
    - Change the content values of the meta tags to your names for author/s and the date today for revised.
    - Please do the following tasks that will ask you to reposition HTML elements then answer the guided question for each task on the .md file. Commit changes to the .md file and to the .html file as well.
    **- This seatwork is worth 20pts and should be submitted by the end of the period** The link to [KHub submission bin](https://khub.mc.pshs.edu.ph/mod/assign/view.php?id=15481).
      - Submit the links to your .md file and .html file.

```html
<!DOCTYPE html>
<html>
<head>
  <meta name="author" content="<your names>" />
  <meta name="revised" content="<date today>" />
  <style>
    body { font-family: Arial, sans-serif; }
    .header, .footer {
      background: lightblue;
      padding: 10px;
    }
    .footer {
       opacity: 0.5;
    }
    .sidebar {
      background: lightgreen;
      width: 150px;
      height: 200px;
    }
    .content {
      background: lightyellow;
      width: 300px;
      height: 200px;
    }    
  </style>
</head>
<body>
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="content">Main Content</div>
  <div class="footer">Footer</div>
</body>
</html>
```
### Step 1 (Static vs Relative):

- Add in css ```position: relative; top: 20px; left: 20px;``` to .sidebar.

- Guided Question: What changed compared to the default static positioning? Try to give different values to top and left or you can change it to bottom, right.

  At default positioning, the segments of the page are rather fixed towards a left alignment. With the new relative positioning, the sidebar moved a bit to the right and a bit down, covering a part of the content section. Increasing the values to top moves the sidebar down, as if adding a space between it and the header. Decreasing moves it up. Likewise, increasing left pushes the sidebar further right, while descreasing moves it left. Bottom makes the sidebar move up, and right makes the sidebar move left as value increases.

### Step 2 (Fixed):

- Add in css ```position: fixed; bottom: 0; width: 100%;``` to .footer.

- Guided Question: What happens when you scroll the page? Why does the footer behave differently from position relative?

  The footer is now fixed at the bottom, so when you scroll the page, it stays at the bottom of the screen. It behaves differently due to the new code fixing its position on the screen/page. In comparison, relative uses its original position as a basis, which may change when scrolling.

### Step 3 (Absolute):

- Add in css ```position: absolute; top: 66px; left: 200px;``` to .content.

- Guided Question: What is the effect of position: absolute on an element? How is it different from fixed?

  The main content segment has now moved drastically from its original position, appearing beside the sidebar. Altering top moves the segment higher or lower, depending on value (increase moves it lower). Altering left moves it right or left, similarly depending on value (increase moves it right). Absolute position, then, could be positioning using the actual measurements of the screen.

### Step 4 : (Absolute)

- Add in html ```<div class="notice">Notice!</div>``` and include the css below:

```css
.notice {
    position: absolute;
    top: 60px;
    left: 400px;
    background: orange;
    padding: 10px;
    z-index: 2;
}
```

- Give .content a z-index: 1.

- Guided Question: Why does the notice appear on top of the content? What happens if you swap the z‑index values?

  Swapping the z-index leads the notice to appear behind the content. This means that z-index indicates how elements are positioned, with those having a higher z-index appearing in front of those with lower z-indexes.

- Challenge: 
    * What changes that you have to do on the code that will position .notice box on the top right corner of the .content box? Please write the code on paper as well (both html and css on the part of .notice and .content).
      Update values of left and top to 230 and 68 px respectively.

    * Try to change the position of .content to relative then to fixed. What do you observed each time?

      With relative, .content moves down. Fixed returned it back to its original position with absolute.

    * What do you observe on about the effect of z-index on .notice and .content boxes?

      Z-index alters the order of how elements are displayed on screen if they overlap each other. A higher x-index appears in front of those with lower z-index.

3. Please answer the following reflection questions (15 minutes)

    a. Could you summarize the differences between the CSS position values (static, relative, absolute, fixed)? 

      Static is the default. Relative uses the static/original position to alter the position. Absolute uses an ancestor in order to alter position and scrolls with the page. Fixed fixes itself based on the browser/screen and stays locked there, even if you scroll. 

    b. How does absolute positioning depend on its parent element?

      If an object is absolutely positioned, it will be positioned relative to the nearest parent element it has. A parent element is an element that directly contains another element.

    c. How do you differentiate sticky from fixed (you can research on sticky)?
    
      Fixed positioning refers to the browser viewport. This would mean it would stay at a position as you scroll. Sticky positioning "sticks" them to their parent element, acting as a fixed element until you scroll to a certain position.

    d. If you were designing a webpage for a school event, how might you use positioning to highlight important information? Please give concrete examples.

      If I were to design a webpage for a school event, the navigation bar and footer would be fixed, allowing students to click on it to transition to other webpages. For headers for content, I would use sticky positioning, where it sticks until they scroll to the next part, where the next header would be the one stuck. If I need to put text on images (say, a banner), I would use absolute positioning. Relative positioning can be used to overlap certain elements. For example, an element detailing information under a little notice to acknowledge and remind students of certain reminders and warnings.
