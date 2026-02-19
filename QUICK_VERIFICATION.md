# Quick Verification Guide - Proof & Submission System

## 🎯 Quick Test (5 Minutes)

### Test 1: Proof Page Loads
1. Open `d:\kodnest\index.html`
2. Click "Proof" in navigation
3. ✅ Should see: "Project 1 — Job Notification Tracker"
4. ✅ Should see: Status badge (NOT STARTED or IN PROGRESS)
5. ✅ Should see: 8 steps with ✓ checkmarks
6. ✅ Should see: 3 artifact input fields
7. ✅ Should see: "Copy Final Submission" button (disabled)

### Test 2: URL Validation Works
1. Enter invalid URL: `test123`
2. Click "Save Artifact Links"
3. ✅ Should see: "✗ Invalid URL format" in red
4. ✅ Links should NOT save

### Test 3: Valid URLs Save
1. Enter valid URLs:
   - Lovable: `https://lovable.dev/test`
   - GitHub: `https://github.com/test/repo`
   - Deployed: `https://test.vercel.app`
2. Click "Save Artifact Links"
3. ✅ Should see: "✓ Valid" for each field in green
4. ✅ Should see: Success alert
5. ✅ Status badge should change to "IN PROGRESS" (amber)

### Test 4: Ship Lock Enforced
1. With only links saved (no tests)
2. ✅ Should see: "Requirements pending:"
3. ✅ Should see: "Complete all 10 test checklist items"
4. ✅ Copy button should be DISABLED

### Test 5: Complete All Requirements
1. Go to Test page (`/jt/07-test`)
2. Check all 10 test items
3. Return to Proof page
4. ✅ Status badge should be "SHIPPED" (green)
5. ✅ Should see: "✓ All requirements met. Ready to submit!"
6. ✅ Copy button should be ENABLED
7. ✅ Should see: "✓ Project 1 Shipped Successfully."

### Test 6: Copy Submission Works
1. Click "Copy Final Submission"
2. ✅ Should see: Success alert
3. Paste in text editor
4. ✅ Should see: Formatted submission with all 3 links

### Test 7: Persistence Works
1. Refresh the page
2. Go to Proof page
3. ✅ Status should still be "SHIPPED"
4. ✅ Links should still be populated
5. ✅ Copy button should still be enabled

---

## ✅ Expected Outcomes

### Status Badge Colors
- **Gray** (#e2e3e5) = Not Started
- **Amber** (#fff3cd) = In Progress  
- **Green** (#d4edda) = Shipped

### Validation Messages
- **Red** "✗ Invalid URL format" = Invalid
- **Green** "✓ Valid" = Valid

### Button States
- **Disabled** (grayed out) = Requirements not met
- **Enabled** (normal) = Ready to copy

---

## 🐛 Troubleshooting

### Issue: Status not changing to "Shipped"
**Check:**
- Are ALL 10 test items checked? (Go to `/jt/07-test`)
- Are ALL 3 artifact links valid URLs?
- Did you click "Save Artifact Links"?

### Issue: Copy button disabled
**Check:**
- Status badge should be "SHIPPED" (green)
- If amber, check requirements list
- Complete missing requirements

### Issue: Links not saving
**Check:**
- Are URLs valid? (Must start with http:// or https://)
- Did you see success alert?
- Check browser console for errors

### Issue: Shipped message not showing
**Check:**
- Status must be "SHIPPED"
- Both tests AND links must be complete
- Refresh page if needed

---

## 📋 Submission Checklist

Before submitting, verify:
- [ ] All 10 test items checked
- [ ] Lovable link entered and validated
- [ ] GitHub link entered and validated
- [ ] Deployed link entered and validated
- [ ] Status badge shows "SHIPPED" (green)
- [ ] Copy button is enabled
- [ ] Shipped message is visible
- [ ] Final submission copied successfully
- [ ] Pasted submission shows all 3 links

---

## 🎯 Success Criteria

**You know it's working when:**
1. ✅ Status badge changes from gray → amber → green
2. ✅ Validation shows ✓ Valid for all 3 links
3. ✅ Copy button enables when shipped
4. ✅ Shipped message appears
5. ✅ Final submission text includes all links
6. ✅ Everything persists after refresh

---

## 📞 Quick Reference

**Routes:**
- `/proof` - Proof & submission page
- `/jt/07-test` - Test checklist
- `/jt/08-ship` - Ship page (unlocks when tests pass)

**localStorage Keys:**
- `jobTrackerArtifacts` - Artifact links
- `jobTrackerTestStatus` - Test checklist status
- `jobTrackerStepCompletion` - Step completion

**Required for "Shipped" Status:**
1. All 10 tests checked ✓
2. All 3 links valid ✓

That's it! 🚀
