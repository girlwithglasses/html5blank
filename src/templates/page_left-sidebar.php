<?php
/*
Template Name: Left Sidebar
*/
	get_header(); ?>

	<div id="primary-right" role="main">
		<!-- section -->
		<section>
			<h1><?php the_title(); ?></h1>
		<?php if (have_posts()): while (have_posts()) : the_post(); ?>
			<!-- article -->
			<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
				<?php the_content(); ?>

				<!-- ?php comments_template( '', true ); // Remove if you don't want comments ?>
				<br class="clear">
				<?php edit_post_link(); ?> -->

			</article>
		<?php endwhile; ?>
		<?php else: ?>
			<article>
				<h2><?php _e( 'Sorry, nothing to display.', 'html5blank' ); ?></h2>
			</article>
		<?php endif; ?>
		</section>
	</div>

<?php get_sidebar('left'); ?>

<?php get_footer(); ?>
