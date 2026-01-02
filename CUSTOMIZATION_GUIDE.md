# 🎨 Customization Guide

Quick guide to personalize your portfolio website.

## 📝 Content Updates

### 1. Personal Information (Hero Section)

**File:** `components/Hero.tsx`

```typescript
// Update your name (line 52)
<span className="text-gradient-subtle">Your Name Here</span>

// Update your title/subtitle (line 57)
I build exceptional digital experiences.

// Update your bio (line 64-67)
I'm a <span>Your Role</span> specializing in...

// Update social links (lines 92-95)
{ Icon: Github, href: 'https://github.com/yourusername', label: 'GitHub' },
{ Icon: Linkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
{ Icon: Mail, href: 'mailto:your.email@example.com', label: 'Email' },
```

### 2. About Section

**File:** `components/About.tsx`

Update the bio paragraphs (lines 53-66)

### 3. Work Experience

**File:** `components/Experience.tsx`

```typescript
// Replace the experiences array (lines 11-41) with your work history:
const experiences = [
  {
    title: "Your Job Title",
    company: "Company Name",
    period: "Start Date - End Date",
    description: [
      "Achievement or responsibility 1",
      "Achievement or responsibility 2",
      "Achievement or responsibility 3",
      "Technologies: List your tech stack",
    ],
  },
  // Add more experiences...
];
```

### 4. Skills

**File:** `components/Skills.tsx`

```typescript
// Update skillCategories array (lines 11-50) with your skills:
const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'Skill Name', level: 95 }, // level is 0-100
      // Add more skills...
    ],
  },
  // Add more categories...
];

// Update technology tags (lines 92-95)
{['React', 'Next.js', 'Your', 'Tech', 'Stack'].map(...)}
```

### 5. Projects

**File:** `components/Projects.tsx`

```typescript
// Replace projects array (lines 13-39) with your projects:
const projects = [
  {
    title: "Project Name",
    description: "Brief project description explaining what it does",
    tech: ["Tech1", "Tech2", "Tech3"],
    github: "https://github.com/yourusername/project",
    live: "https://your-project-url.com",
    image: "/projects/project-image.jpg", // Add image to public/projects/
  },
  // Add more projects...
];
```

### 6. Contact Information

**File:** `components/Contact.tsx`

```typescript
// Update email (line 68)
href="mailto:your.email@example.com"

// Update location (line 81)
<p className="text-white font-medium">Your Location</p>

// Update social links (lines 94-98)
{[
  { name: 'GitHub', url: 'https://github.com/yourusername' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername' },
  { name: 'Twitter', url: 'https://twitter.com/yourusername' },
].map(...)}
```

### 7. SEO & Metadata

**File:** `app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: "Your Name - Your Title",
  description: "Your professional description",
  keywords: ["Your", "Keywords", "Here"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Your Name - Your Title",
    description: "Your professional description",
    type: "website",
  },
};
```

## 🎨 Style Customization

### Colors

**File:** `app/globals.css`

Update the gradient colors to your preference:

```css
.text-gradient {
  @apply bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500;
}

/* Change blue-500, purple-500, pink-500 to your colors */
```

Common color combinations:

- **Ocean:** from-blue-400 via-cyan-500 to-teal-500
- **Sunset:** from-orange-500 via-pink-500 to-red-600
- **Forest:** from-green-400 via-emerald-500 to-teal-600
- **Royal:** from-indigo-500 via-purple-600 to-pink-500

### Fonts

**File:** `app/layout.tsx`

```typescript
// Change to different Google Fonts
import { YourFont, YourMonoFont } from "next/font/google";

const yourFont = YourFont({
  subsets: ["latin"],
  variable: "--font-your-font",
});
```

## 📸 Adding Images

### Project Images

1. Add images to `public/projects/`
2. Reference in Projects component: `/projects/your-image.jpg`

### Profile Photo

1. Add to `public/`
2. Use in About or Hero section:

```tsx
<Image src="/profile.jpg" alt="Profile" width={300} height={300} />
```

## 🔧 Feature Additions

### Add Resume Download

**In Hero or Contact:**

```tsx
<a href="/resume.pdf" download className="px-8 py-4 glass-morphism rounded-lg">
  Download Resume
</a>
```

Place `resume.pdf` in `public/` folder.

### Add More Sections

1. Create new component in `components/YourSection.tsx`
2. Import and add to `app/page.tsx`:

```tsx
import YourSection from "@/components/YourSection";

// In return statement:
<YourSection />;
```

3. Add to navigation in `components/Navbar.tsx`

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy automatically

### Custom Domain

1. Buy domain (Namecheap, GoDaddy, etc.)
2. Add to Vercel project settings
3. Update DNS records

## 🎯 Quick Checklist

Before deploying:

- [ ] Update all personal information
- [ ] Add real work experience
- [ ] Add actual projects
- [ ] Update social media links
- [ ] Add email address
- [ ] Update SEO metadata
- [ ] Add profile photo (optional)
- [ ] Test on mobile devices
- [ ] Check all links work
- [ ] Test contact form

## 💡 Tips

1. **Keep it updated** - Regularly add new projects and skills
2. **Test thoroughly** - Check on different devices and browsers
3. **Optimize images** - Compress images for faster loading
4. **Use analytics** - Add Google Analytics to track visitors
5. **Get feedback** - Ask friends/colleagues for input

## 📞 Need Help?

If you encounter issues:

1. Check the browser console for errors
2. Verify all imports are correct
3. Make sure all files are saved
4. Restart the development server: `npm run dev`
5. Clear `.next` folder if needed: `rm -rf .next && npm run dev`

---

Happy coding! 🚀
