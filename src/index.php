<?php get_header(); ?>

	<div class="main" id="primary-left" role="main">
		<!-- section -->
		<section>

			<h1><?php _e( 'Blog', 'html5blank' ); ?></h1>

			<?php get_template_part('loop'); ?>

			<?php get_template_part('pagination'); ?>

		</section>
		<!-- /section -->
	</div>

<?php get_sidebar('right'); ?>

<?php get_footer(); ?>
