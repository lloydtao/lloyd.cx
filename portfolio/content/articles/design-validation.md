---
slug: 'design-validation'
title: 'Design Validation'
series: 'Agile Software Development'
description: 'How design documents can make junior team members more successful.'
publishedAt: "2020-04-30T09:00:00.000Z"
cover_image: 'https://placekitten.com/1200/675'
canonical_url: ''
tags: 'agile, leadership, devops'
published: true
---

Software teams have a broad range of skill levels. 

Whether this is due to familiarity with the tools, general software engineering experience, or a push for mentorship from engineering managers, we shouldn't assume nor expect a level playing field.

In my journey to give junior team members independence, I've found that work items have a high risk of running out-of-scope in implementation. 

This leads to a range of issues, including undesired functionality and conflict with other work items. Product owners put a lot of effort into keeping the backlog well-defined, and we need to stick to what's required!  

Further, these issues will almost always be identified at the resolution (pull request) level, where time and development costs have already been spent.

Therefore, we need a way to keep our team members on the right path, while still promoting autonomy through asynchronous development practises.

### Enriching the Agile Lifecycle

In my experience, I've found that the solution is a single, extra step in the agile process.

You're probably familiar with the **design document**. Before implementation starts, the developer whips up an outline of how they intend for the work item to be to completed.

This is nicely expanded upon by [reqexperts.com](https://reqexperts.com/resources/requirements-articles/articles-what-is-the-difference/):

> The Design Specification should state how the design will meet the requirements. Design is not a one-to-one response to requirements. Design requires discipline knowledge and integration of disciplines in most cases.

At this stage, a senior team member can approve of the documented strategy, *before* a week or two is spent on the implementation. More often than not, a quick read will result in an all-clear. However, if there's an issue, then specific changes can be requested.

Of course, your organisation may implement agile in a different way. What's valuable is the core idea of documenting and validating a feature's design **before** its implementation.

I've provided the [template](https://docs.google.com/document/d/1Lxd5JkrKguPrbO6hXFENf5UPMe7jaPXScKa3AQYVsNc/) that I use, and an [example](https://docs.google.com/document/d/1UDV1kNEByRWje3oj7fgkYYkWUo5MYbKLewU245aLEGg/) of a completed document.

### The Junior Agile Lifecycle

Now that we've identified this extra step, let's outline our **Junior Agile Lifecycle**.

1. **Concept:** Stakeholder discusses a feature request with the Product Owner.
2. **Requirements:** Product Owner documents the feature's requirements, and adds the work item to the backlog.
3. **Design:** Developer picks up the work items and outlines their implementation strategy.
4. **Design validation:** Design document is reviewed by a Senior Developer.
5. **Implementation:** Developer implements the work item based on the documented design.
6. **Evaluation:** Feature branch is reviewed, tested and merged.