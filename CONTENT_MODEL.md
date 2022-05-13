# CMS Content Model

This frontend project will be integrated on to [CraftCMS](https://craftcms.com), where all the actual content for the website will live.

The CMS is configure in a way to expose the following variables:

### Entry

The `entry` variable is object that contains all the content for a giving page. The only required property for an `entry` is `title`:

```twig
{% set entry = {
  title: "Page Title"
} %}
```

but any other properties can be added to the `entry` object, as needed:

```twig
{% set entry = {
  title: "Page Title",
  contents: "<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, neque?</p>"
  items: [
    "Item 1",
    "Item 2",
    "Item 3"
  ]
} %}
```

On your Twig page, you should set the `entry` object variable with the needed content first, then proceed to render it on the page:

```twig
{% extends "_layouts/_generic_page_layout.twig" %}

{% set entry = {
  title: "Page Title",
  contents: "<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, neque?</p>"
  items: [
    "Item 1",
    "Item 2",
    "Item 3"
  ]
} %}

{% block content %}
	<div class="px-3 py-8 lg:py-20">
    <article class="mx-auto max-w-narrow">
      {% if entry is defined and entry %}

        {% if entry.title is defined and entry.title %}
          <h1>{{ entry.title }}</h1>
        {% endif %}

        ...

      {% else %}
        <pre>entry is not defined.</pre>
      {% endif %}
    </article>
  </div>
{% endblock %}
```

### Content Blocks

The `entry` object can have a special property called `contentBlocks`:

```twig
{% set entry = {
  title: "Page Title"
  contentBlocks: [
    ...
  ]
} %}
```

The `contentBlocks` prop can only be of type array, more specifically, an array of `blk` objects. These `blk` objects, like the `entry` objects, has a required property named `type`, but you can also add more properties as needed:

```twig
{% set entry = {
  title: "Page Title"
  contentBlocks: [
    ...
    {
      type: "richText",
      contents: "<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, neque?</p>"
    },
    ...
  ]
} %}
```

The `type` prop should map to a twig component in order to allow for simple integration between the CMS and the frontend code. If we modify our previous example:

```twig
{% extends "_layouts/_generic_page_layout.twig" %}

{% set entry = {
  title: "Page Title",
  contentBlocks: [
    {
      type: "richText",
      contents: "<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, neque?</p>"
    },
  ]
} %}

{% block content %}
	<div class="px-3 py-8 lg:py-20">
    <article class="mx-auto max-w-narrow">
      {% if entry is defined and entry %}

        {% if entry.title is defined and entry.title %}
          <h1>{{ entry.title }}</h1>
        {% endif %}

        {% for blk in entry.contentBlocks %}

          {% if blk.type is defined %}
            {% include "_blocks/_" ~ blk.type ~ ".twig" ignore missing with {
              blk: blk
            } %}
          {% endif %}

        {% endfor %}

      {% else %}
        <pre>entry is not defined.</pre>
      {% endif %}
    </article>
  </div>
{% endblock %}
```

The above code allows Twig to load the correct `include` dynamically and the [`ignore missing`](https://twig.symfony.com/doc/3.x/tags/include.html) will ignore the statement if the template to be included does not exist.

This combination of `entry` and `contentBlocks` enable great freedom to content creators, allowing them to move content around, never limiting the authoring experience.
