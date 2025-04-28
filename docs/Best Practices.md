# Best Practices

## Performance Tips

### Using Images: Performance & Responsiveness

A practical, performance-friendly way to use responsive images in Next.js:

```jsx
// Example: Responsive, performant image with preserved aspect ratio
<div
  style={{ position: 'relative', width: '100%', paddingBottom: '56.25%' }} // 16:9 aspect ratio
>
  <Image
    src="/path/to/image.jpg"
    alt="Descriptive alt text"
    fill
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    className="object-cover rounded-lg"
    priority // or loading="lazy" for non-critical images
  />
</div>
```

**Why is this a best practice?**
- The wrapper's `paddingBottom` sets a fixed aspect ratio, so the browser reserves space and prevents layout shift (CLS).
- The `fill` prop makes the image responsive, always covering the container.
- The `sizes` prop ensures the browser loads the right image size for each device.
- This approach combines performance and responsiveness for a smooth user experience.
