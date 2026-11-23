# Final Project Plan

## Milestone 1: The Plan

Path: B, two normal enhancments

### Enhancement: Markdown Support

**What the user will see:** Users will be able to write blog posts using Markdown formatting, including headings, bold text, italic text, lists, links, and code blocks. When viewing a post, the Markdown will be displayed as properly formatted content. Users will also be able to preview their Markdown before publishing or saving a post.

**Back-end changes:**  Markdown will be stored as plain text in the existing body field, so none or nothing major, probably

**Front-end changes:**
- Update `PostDetail.jsx` to display formatted Markdown.
- Update `PostCard.jsx` to show a readable post preview without unfinished Markdown formatting.
- Update `PostForm.jsx` to include a Markdown preview.
- Add CSS styling for all teh Markdown elements.

**New packages:**
- `react-markdown`
- `remark-gfm`

**What I will test:**
- Mark sure all of it is displaying correctly.
- Code blocks display in a monospace font.
- The Markdown preview matches how the post appears after publishing.
- HTML typed into a post is displayed as text and does not execute.
- Post cards display readable previews.

### Enhancement: Post Categories

**What the user will see:** Users will be able to assign categories to their blog posts, such as Technology, Lifestyle, and Tutorial. Categories will appear on post cards and individual post pages. Users will also be able to filter posts on the home page by category.

**Back-end changes:**
- Add a `category` field to the Post schema using an enum with a fixed list of categories.
- Update POST and PUT post routes to validate the category.
- Update GET `/api/posts` to accept a category query parameter and filter posts.
- Make sure older posts without a category still display correctly.

**Front-end changes:**
- Update `PostForm.jsx` to include a category selection dropdown.
- Update `PostCard.jsx` to display the post category.
- Update `PostDetail.jsx` to display the post category.
- Update `Home.jsx` to include category filtering.
- Update `api.js` to send the selected category when requesting posts.

**New packages:** None.

**What I will test:**
- A category can be selected when creating and changed when editing a post.
- Categories display correctly on post cards and individual post pages.
- Filtering by a category only displays posts from that category.
- Selecting "All" displays all post.
- The server rejects posts that are invalid.
- Older posts without a category continue to display.

### Task List

1. Review the existing post model, routes, and front-end components - Project Week 1
2. Install `react-markdown` and `remark-gfm` - Project Week 2
3. Update `PostDetail.jsx` to render Markdown - Project Week 2
4. Update `PostCard.jsx` to display readable previews - Project Week 2
5. Update `PostForm.jsx` to include a Markdown preview - Project Week 2
6. Add CSS styling for Markdown elements - Project Week 2
7. Add the category field to the Post schema - Project Week 2
8. Update the post routes to validate and filter by category - Project Week 2
9. Update `api.js` to support category filtering - Project Week 3
10. Update `PostForm.jsx` to include category selection - Project Week 3
11. Update `PostCard.jsx` and `PostDetail.jsx` to display categories - Project Week 3
12. Update `Home.jsx` to support category filtering - Project Week 3
13. Test both enhancements and fix any issues - Project Week 4
14. Test existing features including registration, login, and post creation, editing, and deletion - Project Week 4
15. Update README and record the project demonstration video - Project Week 4

### Questions or Risks

One concern is making sure older posts that were created before categories were added continue to display correctly. I think the best way to handle this will be by providing a  fallback category of sorts for older posts. I also want to make sure the markdown preview and published post display formatting consistently all the time. 

## AI Usage

**Tools:** ChatGPT

**What I used them for:**
- Mostly for small things like checking errors and mistakes

**How I checked the result:** 
- I'll test it myself and then see if it works or not repetatly until satisfied